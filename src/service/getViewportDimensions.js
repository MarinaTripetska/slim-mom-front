import { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

function getViewportDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export default function useViewportDimensions() {
  const [viewportDimensions, setViewportDimensions] = useState(
    getViewportDimensions(),
  );

  useEffect(() => {
    function handleResize() {
      setViewportDimensions(getViewportDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return viewportDimensions;
}

// const Component = () => {
//   const { height, width } = useViewportDimensions();

//   return (
//     <div>
//       width: {width} ~ height: {height}
//     </div>
//   );
// };

// const rootElement = document.getElementById('root');
// ReactDOM.render(<Component />, rootElement);
