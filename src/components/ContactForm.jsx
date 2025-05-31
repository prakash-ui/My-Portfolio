export default function ContactForm() {
  return (
    <form
      action="https://formsubmit.co/prakashtimilsina67@gmail.com"
      method="POST"
      className="flex flex-col gap-4"
    >
      <input type="hidden" name="_subject" value="New message from portfolio!" />
      <input type="hidden" name="_template" value="table" />
      <input type="hidden" name="_next" value="https://yourdomain.com/thank-you" />
      
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        required
        className="p-2 rounded bg-gray-100 dark:bg-gray-700"
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        required
        className="p-2 rounded bg-gray-100 dark:bg-gray-700"
      />
      <textarea
        name="message"
        placeholder="Your Message"
        rows="5"
        required
        className="p-2 rounded bg-gray-100 dark:bg-gray-700"
      />
      <button
        type="submit"
        className="bg-black text-white dark:bg-white dark:text-black py-2 rounded hover:opacity-80"
      >
        Send Message
      </button>
    </form>
  );
}