import { faker, Sex } from '@faker-js/faker';

class CustomHelper {
  // constructor(config: any) {
  //   super(config)
  //   this.helpers
  // }
  printMessage(msg: string) {
    console.log(msg)
  }

  getRandomName(sex?: string): string {
    switch (sex) {
      case 'male':
        return faker.name.firstName(Sex.Male);
      case 'female':
        return faker.name.firstName(Sex.Female);
      default:
        return faker.name.firstName();
    }
  }
}

export = CustomHelper