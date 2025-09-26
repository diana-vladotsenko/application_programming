import { Typography, Stack, Box, Button, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import SubmitTask from "./SubmitTask";
import UpdateTask from "./UpdateTask";

type Task = {
  id: string;
  content: string;
  deleted: false;
};

type TaskListProps = {
  tasks: Task[];
};

function List() {
  const [tasks, setTasks] = useState<Task[]>([]);

  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:3000/tasks");
      const data = await response.json();

      setTasks(data);
    } catch (error) {
      console.error(error);
    }
  };

  const TaskList: React.FC<TaskListProps> = ({ tasks }) => {
    return (
      <Box>
        {tasks.map((t) => (
          <ListItem key={t.id}>
            {t.content}
            <Button variant="outlined" sx={{ whiteSpace: "nowrap" }}>
              Remove
            </Button>
          </ListItem>
        ))}
      </Box>
    );
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <>
      <Box>
        <Box>
          <Typography variant="h5">To-do</Typography>
        </Box>
        <Box
          sx={{
            marginTop: "40px",
            justifyItems: "center",
          }}
        >
          <Typography variant="h5">The list of tasks</Typography>
          <Typography variant="body2">tasks count: {tasks.length}</Typography>
          <Box>
            <Typography variant="h6">Add new task</Typography>
            <SubmitTask fetchTasks={fetchTasks} />
          </Box>
          <Box>
            <Typography variant="h6">Update the task</Typography>
            <UpdateTask fetchTasks={fetchTasks} />
          </Box>
          <Box>
            <TaskList tasks={tasks} />
          </Box>
          <Stack direction="row" spacing={1} alignItems={"center"}>
            <Typography variant="body2">{}</Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
}

export default List;
