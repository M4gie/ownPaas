import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Task from "App/Models/Task";
import Config from "@ioc:Adonis/Core/Config";
import TaskValidator from "App/Validators/TaskValidator";
import { exec } from "child_process";

export default class TasksController {
  public async index() {
    return Task.all();
  }

  public async store({ request }: HttpContextContract) {
    const { url } = await request.validate(TaskValidator);
    const task = await Task.create({ url });
    const scriptPath = Config.get("app.scriptPath");
    exec(`${scriptPath} ${task.id}`, (err, stdout, stderr) => {
      if (err) {
        console.error(err);
      } else {
        console.log(`stdout: ${stdout}`);
        console.log(`stderr: ${stderr}`);
      }
    });
    return task;
  }

  public async show({ params }: HttpContextContract) {
    const { id } = params;
    return Task.findOrFail(id);
  }

  public async update({ params, request }: HttpContextContract) {
    const { id } = params;
    const { url } = await request.validate(TaskValidator);
    const task = await Task.findOrFail(id);
    task.merge({ url });
    return task.save();
  }

  public async destroy({ params }: HttpContextContract) {
    const { id } = params;
    const task = await Task.findOrFail(id);
    return task.delete();
  }

  public async lastTask() {
    return Task.query().select("*").orderBy("id", "desc").first();
  }
}
