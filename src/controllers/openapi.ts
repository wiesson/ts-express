import { Response, Request } from 'express';

const docs = {
  openapi: '3.0.0',
  info: {
    title: 'Sample API',
    description:
      'Optional multiline or single-line description in [CommonMark](http://commonmark.org/help/) or HTML.',
    version: '0.1.9',
  },
  servers: [
    {
      url: 'http://api.example.com/v1',
      description: 'Optional server description, e.g. Main (production) server',
    },
    {
      url: 'http://staging-api.example.com',
      description:
        'Optional server description, e.g. Internal staging server for testing',
    },
  ],
  paths: {
    '/users': {
      get: {
        summary: 'Returns a list of users.',
        description: 'Optional extended description in CommonMark or HTML.',
        responses: {
          '200': {
            description: 'A JSON array of user names',
            content: {
              'application/json': {
                schema: {
                  type: 'array',
                  items: {
                    type: 'string',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/users/{userId}': {
      get: {
        summary: 'Get a user by ID',
        parameters: [
          {
            in: 'path',
            name: 'userId',
            schema: {
              type: 'integer',
            },
            required: true,
            description: 'Numeric ID of the user to get',
          },
        ],
      },
    },
  },
};

const index = async (req: Request, res: Response) => {
  res.send({ ...docs });
};

export { index };
