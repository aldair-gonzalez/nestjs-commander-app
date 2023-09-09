import { Command, CommandRunner, InquirerService } from 'nest-commander';

@Command({ name: 'envFile', options: { isDefault: true } })
export class BasicCommand extends CommandRunner {
  constructor(private readonly inquirerService: InquirerService) {
    super();
  }

  async run(inputs: string[], options: { envFile?: string }) {
    options = await this.inquirerService.ask('envFile', options);
    const envFileName = options.envFile;
    process.env.ENV_FILE_NAME = envFileName;
  }
}
