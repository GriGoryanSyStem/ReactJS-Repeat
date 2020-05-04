export const required = (value) => {
    return (
        value || typeof value === 'number' ? undefined : 'Required'
    )
}
export const maxLength = (max) => (value) => {
    return (
        value && value.length > max ? `Must be ${max} characters or less` : undefined
    )
}
export const minLength = (min) => (value) => {
    return (
        value && value.length < min ? `Must be ${min} characters or more` : undefined
    )
}
