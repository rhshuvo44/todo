import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <div className="pt-5">
        <h1 className="text-center text-3xl font-semibold">My Todos</h1>
      </div>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
