"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hello = void 0;
const hello = {
    tags: ['/'],
    description: 'Hello',
    operationId: 'hello',
    security: [
        {
            bearerAuth: [],
        },
    ],
    requestBody: {},
    responses: {
        '201': {
            description: 'Hello created successfully!',
            content: {
                'application/json': {
                    schema: {
                        type: 'object',
                        properties: {},
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
exports.hello = hello;
//# sourceMappingURL=hello.js.map