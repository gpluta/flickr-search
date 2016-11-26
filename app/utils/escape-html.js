export function escapeHtml(someHtml) {
  let entityMap = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': '&quot;',
    "'": '&#39;',
    "/": '&#x2F;'
  };

  return someHtml.replace(/[&<>"'\/]/g, str => {
    return entityMap[str];
  });
}

export default escapeHtml;
