import { HttpContextContract } from "@ioc:Adonis/Core/HttpContext";
import Task from "App/Models/Task";
import TaskValidator from "App/Validators/TaskValidator";

export default class TasksController {
  public async index() {
    return Task.all();
  }

  public async store({ request }: HttpContextContract) {
    const { url } = await request.validate(TaskValidator);
    return Task.create({ url });
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
}
