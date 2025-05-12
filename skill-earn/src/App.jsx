import { useState, useEffect } from "react";

export default function App() {
  const [wallet, setWallet] = useState(() => {
    const saved = localStorage.getItem("wallet");
    return saved ? JSON.parse(saved) : 50;
  });

  const [tab, setTab] = useState("courses");
  const [tasksDone, setTasksDone] = useState(() => {
    const saved = localStorage.getItem("tasksDone");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("wallet", JSON.stringify(wallet));
    localStorage.setItem("tasksDone", JSON.stringify(tasksDone));
  }, [wallet, tasksDone]);

  const tasks = [
    { id: 1, title: "Subscribe to YouTube Channel", reward: 10 },
    { id: 2, title: "Follow Instagram Page", reward: 5 },
    { id: 3, title: "Like a YouTube Video", reward: 3 },
  ];

  const completeTask = (task) => {
    if (!tasksDone.includes(task.id)) {
      setTasksDone([...tasksDone, task.id]);
      setWallet(wallet + task.reward);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 font-sans">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-8 shadow-md">
        <h1 className="text-4xl font-extrabold text-center tracking-wide drop-shadow-lg">SkillEarn - Demo Platform</h1>
      </header>

      {/* Tabs */}
      <nav className="flex justify-center space-x-4 my-8">
        {["courses", "earn", "sponsor"].map((item) => (
          <button
            key={item}
            className={`px-6 py-2 rounded-full text-lg font-semibold shadow transition duration-300 ease-in-out ${
              tab === item
                ? "bg-purple-600 text-white shadow-lg scale-105"
                : "bg-white text-purple-600 border border-purple-600 hover:bg-purple-100"
            }`}
            onClick={() => setTab(item)}
          >
            {item === "courses" ? "Courses" : item === "earn" ? "Earn" : "Sponsor"}
          </button>
        ))}
      </nav>

      {/* Content */}
      <main className="max-w-6xl mx-auto px-6 pb-12">
        {tab === "courses" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">📚 Explore Courses</h2>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {[{ title: "React Basics", price: 499 }, { title: "Python for Beginners", price: 399 }, { title: "JavaScript Essentials", price: 299 }].map((course, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-purple-100"
                >
                  <h3 className="text-xl font-bold text-purple-700 mb-2">{course.title}</h3>
                  <p className="text-gray-600 mb-4">Price: ₹{course.price}</p>
                  <button className="w-full px-4 py-2 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700 transition-all">Buy & Stream</button>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "earn" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">💼 Earn by Completing Tasks</h2>
            <div className="text-xl font-medium mb-4 text-green-700 bg-green-100 px-4 py-2 inline-block rounded-full shadow">Wallet Balance: ₹{wallet}</div>
            <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {tasks.map((task) => (
                <div
                  key={task.id}
                  className="bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-transform transform hover:-translate-y-1 border border-green-100"
                >
                  <h3 className="text-lg font-semibold text-gray-700 mb-2">{task.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">Earn ₹{task.reward}</p>
                  <button
                    className={`w-full px-4 py-2 rounded-xl font-medium transition-all ${
                      tasksDone.includes(task.id)
                        ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                        : "bg-green-500 text-white hover:bg-green-600"
                    }`}
                    disabled={tasksDone.includes(task.id)}
                    onClick={() => completeTask(task)}
                  >
                    {tasksDone.includes(task.id) ? "✅ Completed" : "🚀 Do Task"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {tab === "sponsor" && (
          <section>
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">📣 Sponsor a Promotion</h2>
            <div className="bg-white p-8 rounded-2xl shadow-xl max-w-xl mx-auto border border-indigo-100">
              <p className="text-gray-700 mb-4 text-lg leading-relaxed">
                Want to promote your YouTube channel, product, or Instagram page?
                Use our userbase to complete real engagement tasks.
              </p>
              <button className="w-full px-5 py-3 bg-pink-500 text-white text-lg font-semibold rounded-xl hover:bg-pink-600 transition-all shadow">Add Promotion Request (Mock)</button>
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
