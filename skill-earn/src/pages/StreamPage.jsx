import { useParams } from "react-router-dom";

export default function StreamPage() {
  const { courseId } = useParams();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-white to-blue-100 p-4">
      <h1 className="text-3xl font-bold mb-6 text-purple-700">📺 Streaming Course: {courseId}</h1>
      <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl">
        <iframe
          className="w-full h-full rounded-xl shadow-xl"
          src="https://www.youtube.com/embed/zy2wgS0o85U"
          title="Course Video"
          allowFullScreen
        />
      </div>
    </div>
  );
}
