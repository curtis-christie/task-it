import PropTypes from "prop-types";

export default function TaskItem({ task }) {
  return (
    <div>
      <p>{task.title}</p>
    </div>
  );
}

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    status: PropTypes.oneOf(["todo", "done"]),
    subTasks: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string,
      }),
    ),
  }),
};
