---
title: "Form Validation"
lectureId: 21
section: 6
sectionTitle: "Working with Forms"
date: "2026-03-03"
tags: ["react", "forms", "validation"]
---

## Summary

Form validation ensures user input meets requirements before submission. React allows inline validation, blur-triggered validation, or submission-time validation.

## Key Concepts

- Show errors only after the user has interacted with the field (blur or submit)
- Track `touched` state per field to avoid premature error messages
- Validation can live inline or be extracted into a custom hook

## Detailed Notes

```jsx
function SignupForm() {
  const [email, setEmail] = useState('');
  const [touched, setTouched] = useState(false);

  const isValid = email.includes('@');
  const showError = touched && !isValid;

  return (
    <form>
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={e => setEmail(e.target.value)}
        onBlur={() => setTouched(true)}
        className={showError ? 'input-error' : ''}
      />
      {showError && <p className="error">Please enter a valid email.</p>}
    </form>
  );
}
```

## Code Examples

```jsx
// Reusable validation helpers
const validators = {
  required: (v) => v.trim().length > 0 || 'This field is required',
  email: (v) => /\S+@\S+\.\S+/.test(v) || 'Invalid email address',
  minLength: (n) => (v) => v.length >= n || `Minimum ${n} characters`,
};
```
