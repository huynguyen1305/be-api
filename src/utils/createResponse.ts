export default function createResponse(response: { code: number; message: string; data?: unknown; page?: number; total?: number }) {
  return {
    code: response.code,
    message: response.message,
    data: response.data,
    page: response.page,
    total: response.total,
  };
}
