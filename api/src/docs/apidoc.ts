import  {hello} from './hello';
import  {calc}  from './calc';
import  {calcRequestBody}  from './calc';
const apiDocumentation = {
    openapi: '3.0.1',
    info: {
      version: '1.0.0',
      title: 'CalcuCo API - Documentation',
      description: '',
      termsOfService: '',
      contact: {
        name: 'Jaber Abdallatef',
        email: 'jaber.abdallatef@gmail.com',
        url: '',
      },
      license: {
        name: 'Apache 2.0',
        url: 'https://www.apache.org/licenses/LICENSE-2.0.html',
      },
    },
    servers: [
      {
        url: 'http://localhost:4000/',
        description: 'Local Server',
      },
    ],
    tags: [
      {
        name: '/',
      },
    ],
    paths: {
      '/': {
        get: hello,
      },
      '/calc': {
        post: calc,
      },
    },
    components: {
      schemas: {
        calcRequestBody
      },
    },
  };
  
  export { apiDocumentation };