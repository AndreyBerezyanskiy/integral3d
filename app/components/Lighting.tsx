export const Lighting = () => {
  return (
    <>
      <ambientLight intensity={2} />
      <pointLight position={[10, 10, 10]} intensity={2} />
    </>
  );
};
