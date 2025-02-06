import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#e44241"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
