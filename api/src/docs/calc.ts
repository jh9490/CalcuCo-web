const calc = {
    tags: ['/calc'],
    description: 'Calculate',
    operationId: 'calc',
    security: [
      {
        bearerAuth: [],
      },
    ],
    requestBody: {
      content: {
        'application/json': {
          schema: {
            $ref: '#/components/schemas/calcRequestBody',
          },
        },
      },
      required: true,
    },
    responses: {
      '201': {
        description: 'Result of expression!',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
              },
            },
          },
        },
      },
      '500': {
        description: 'Internal Server Error',
        content: {
          'application/json': {
            schema: {
              type: 'object',
              properties: {
                message: {
                  type: 'string',
                  example: 'Internal Server Error',
                },
              },
            },
          },
        },
      },
    },
  };
  const calcRequestBody = {
    type: 'object',
    properties: {
      expression: {
        type: 'string',
        example: '2*7/5',
      },
    },
  }
  
  export { calc , calcRequestBody };