import type { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Siswabaru from "App/Models/Siswabaru";

export default class SiswabarusController {
  public async index({ view, auth, session, response }: HttpContextContract) {
    const siswabaru = await Siswabaru.query().where({ dihapus: 0 });
    const user = auth?.user?.toJSON();

    if (user?.role == !"siswa") {
      session.flash("notification_login", "Tidak Memiliki Akses");
      return response.redirect("/login");
    }
    const listSiswabaru = siswabaru.map((d, idx) => {
      return { ...d.toJSON(), idx: idx + 1 };
    });

    return view.render("siswabaru.index", {
      siswabaru: listSiswabaru,
      nama_admin: "Baru",
    });
  }
  public async store({ request, response }: HttpContextContract) {
    const { nama, nik, tgllahir, alamat } = request.all();

    await Siswabaru.create({
      nama,
      nik,
      tgllahir,
      alamat,
      dihapus: 0,
    });

    return response.redirect("/Siswabaru");
  }
  public async show({ view, params }: HttpContextContract) {
    const id = params.id;
    const siswabaru = await Siswabaru.query()
      .where({ dihapus: 0 })
      .andWhere({ id })
      .firstOrFail();

    return view.render("siswabaru.show", { siswabaru });
  }
  public async update({
    request,
    response,
    params,
    session,
  }: HttpContextContract) {
    const {  nama, nik, tgllahir, alamat } = request.all();
    const id = params.id;

    await Siswabaru.query().where({ id }).update({
        nama,
        nik,
        tgllahir,
        alamat,
        dihapus: 0,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/Siswabaru`);
  }

  public async delete({ response, params, session }: HttpContextContract) {
    const id = params.id;

    await Siswabaru.query().where({ id }).update({
      dihapus: 1,
    });
    session.flash({ notifivation: "Data Berhasil Diupdate!" });

    return response.redirect(`/Siswabaru`);
  }
}
