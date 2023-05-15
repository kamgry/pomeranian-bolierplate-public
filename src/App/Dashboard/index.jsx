import { Blocks } from '../Components/Blocks/Blocks';
import { MyData } from '../Components/MyData/MyData';
import './styles.css';

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <Blocks />
      <MyData />
    </div>
  );
};
