export default function TaskItem({ task }) {
  return (
    <div>
      <p>
        {task.title} {task.id}
      </p>
    </div>
  );
}
