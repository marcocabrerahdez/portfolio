import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

function ContactLinks() {
  return (
    <div className="flex gap-4 justify-center">
      <Link href="https://github.com/marcocabrerahdez" className="text-primary-foreground hover:text-secondary transition-colors" prefetch={false} target="_blank">
        <FaGithub size={24} />
      </Link>
      <Link href="https://www.linkedin.com/in/marcocabrerahdez/" className="text-primary-foreground hover:text-secondary transition-colors" prefetch={false} target="_blank">
        <FaLinkedin size={24} />
      </Link>
      <Link href="https://twitter.com/marcocabrerahdez" className="text-primary-foreground hover:text-secondary transition-colors" prefetch={false} target="_blank">
        <FaTwitter size={24} />
      </Link>
      <Link href="mailto:marcocabrerahdez.dev@gmail.com" className="text-primary-foreground hover:text-secondary transition-colors" prefetch={false}>
        <FaEnvelope size={24} />
      </Link>
    </div>
  );
}

export default ContactLinks;
