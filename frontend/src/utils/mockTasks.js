const mockTasks = [
  {
    id: 1,
    title: "Do the laundry",
    description: "Need to do the laundry before this day",
    status: "todo",
    subTasks: [
      { title: "Wash laundry", status: "todo" },
      { title: "Dry laundry", status: "todo" },
    ],
  },
  {
    id: 2,
    title: "Go grocery shopping",
    description: "",
    status: "todo",
    subTasks: [
      { title: "Carrots", status: "todo" },
      { title: "Potatoes", status: "todo" },
      { title: "Milk", status: "todo" },
      { title: "Eggs", status: "todo" },
      { title: "Cereal", status: "todo" },
    ],
  },
];

export default mockTasks;
