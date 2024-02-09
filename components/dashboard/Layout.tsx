const Layout = ({ children }: any) => {
  return (
    <div className="mt-[60px] ml-[80px] w-[calc(100%-330px)] mr-[30px] max-h-[100vh] ">
      {children}
    </div>
  );
};
export default Layout;
