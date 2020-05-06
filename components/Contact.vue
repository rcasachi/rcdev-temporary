<template>
  <section id="contact">
    <h2>Let's Talk</h2>
    <form method="post" action="contact.php">
      <div class="form-group">
        <input type="text" name="name" id="name" placeholder="Your Name" required>
      </div>

      <div class="form-group">
        <input type="email" id="email" name="email" placeholder="Your Email" required>
      </div>

      <div class="form-group">
        <input type="text" id="subject" name="subject" placeholder="Subject">
      </div>

      <div class="form-group">
        <textarea name="message" id="message" rows="6" placeholder="Message" required></textarea>
      </div>

      <input type="submit" name="submit" id="submit" value="Send Message">
    </form>
  </section>
</template>

<style>
.form-group {
  margin-bottom: 16px;
}

input,
textarea {
  width: 100%;
  padding: 12px 20px;
  border: 1px solid var(--color-secondary-normal);
  font-size: 14px;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  background: var(--color-bg-normal);
  color: var(--color-text-accent);
}

input:focus,
textarea:focus {
  border-color: var(--color-primary-accent);
  outline: 0;
}

input[type=submit] {
  background: var(--color-secondary-normal);
  text-transform: uppercase;
  cursor: pointer;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
}

input[type=submit]:hover {
  background: var(--color-primary-accent);
  border-color: var(--color-primary-accent);
}
</style>
