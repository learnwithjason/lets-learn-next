import {FC} from 'react'

const Footer: FC<{ date: string }> = ({ date }) => {
  return (
    <footer>
      <p>powered by boops · © {date}</p>
    </footer>
  );
}

export default Footer
