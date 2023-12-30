export const useUtils = () => {
  const sayHello = (prop: string) => console.log(`${prop} Hello!`);

  return {
    sayHello,
  };
};
