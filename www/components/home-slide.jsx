import Image from 'next/image'


export default function HomeSlide() {
  return (
    <Image
      src="https://robocrop.realpython.net/?url=https%3A//files.realpython.com/media/A-Community-Interview_Purple_Watermarked.127ef2a6f1ea.jpg&w=960&sig=98fa6fe4f103271cdcf5969bb5a30bdbbc87f7e2"
      layout="responsive"
      className="p-4 rounded"
      width={40}
      height={20}
    />
  );
}
