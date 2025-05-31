import Typewriter from "../components/Typewriter";
export default function ContactForm() {

  return (
    <section id="contact">
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-2">Get In Touch</h2>
       <p className="text-gray-600 dark:text-gray-400 h-8"> {/* Fixed height prevents layout shift */}
          <Typewriter 
            texts={[
              "Have a project in mind or want to collaborate? Drop me a message below.",
              "Let's build something amazing together.",
              "Your ideas + my expertise = great results.",
              "Ready to start a conversation?"
            ]} 
            speed={50}
            pauseBetween={2000}
          />
        </p>
      </div>

      <form
        action="https://formspree.io/f/mwpbewlv"
        method="POST"
        className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="John Doe"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              required
              className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            />
          </div>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Hello! I'd like to talk about..."
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          ></textarea>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg className="w-5 h-5 text-gray-500 dark:text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
            </svg>
            <span className="text-sm text-gray-500 dark:text-gray-400">I'll respond within 24 hours</span>
          </div>
          
          <button
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Send Message
            <svg className="w-4 h-4 ml-2 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </button>
        </div>
      </form>

      <div className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
        <p>Prefer email? Reach me directly at <a href="mailto:prakashtimilsina67@gmail.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">prakashtimilsina67@gmail.com</a></p>
      </div>
    </div>
    </section>
  );
}