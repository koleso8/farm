import clsx from 'clsx';

const Container = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'flex items-center w-full max-w-[340px] md:max-w-[1080px]  mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Container;
