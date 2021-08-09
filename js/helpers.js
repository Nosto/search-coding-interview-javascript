export function escapeHtml(unsafe) {
    return (unsafe ?? '').toString()
         .replace(/&/g, "&amp;")
         .replace(/</g, "&lt;")
         .replace(/>/g, "&gt;")
         .replace(/"/g, "&quot;")
         .replace(/'/g, "&#039;");
}

export function tokenize(value) {
    return value
        .toLowerCase()
        .split(/[ -./\\()"',;<>~!@#$%^&*|+=[\]{}`~?:]+/)
        .filter((v) => v !== '')
        .map(v => v.replace(/s$/g,''))
}
