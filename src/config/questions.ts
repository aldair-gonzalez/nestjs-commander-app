import { Question, QuestionSet } from 'nest-commander';

@QuestionSet({ name: 'envFile' })
export class BasicQuestions {
  @Question({
    type: 'list',
    name: 'envFile',
    message: 'Qué archivo de configuración quieres usar?',
    choices: ['development', 'test', 'production'],
  })
  parseEnvFile(val: string) {
    return val;
  }
}
