import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Blog from "App/Models/Blog";

export default class BlogsController {
  public async index({ view, auth, session, response }: HttpContextContract) {
    const blog = await Blog.query().where({ dihapus: 0 });
    const user = auth?.user?.toJSON();

    if (user?.role == !"siswa") {
      session.flash("notification_login", "Tidak Memiliki Akses");
      return response.redirect("/login");
    }
    const listBlog = blog.map((d, idx) => {
      return { ...d.toJSON(), idx: idx + 1 };
    });

    return view.render("blog.index", {
      blog: listBlog,
      nama_admin: "Surya",
    });
  }
  public async store({ request, response }: HttpContextContract) {
    const { judul, isi, cover, like } = request.all();

    await Blog.create({
      judul,
      isi,
      cover,
      like,
      dihapus: 0,
    });

    return response.redirect("/Blog");
  }
  public async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const blog = await Blog.query()
      .where({ dihapus: 0 })
      .andWhere({ id })
      .firstOrFail();

    return view.render("blog.show", { blog });
  }
  public async update({
    request,
    response,
    params,
    session,
  }: HttpContextContract) {
    const { judul, isi, cover, like } = request.all();
    const id = params.id;

    await Blog.query().where({ id }).update({
      judul,
      isi,
      cover,
      like,
      dihapus: 0,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/Blog`);
  }

  public async delete({ response, params, session }: HttpContextContract) {
    const id = params.id;

    await Blog.query().where({ id }).update({
      dihapus: 1,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/Blog`);
  }
}
