import Container from '@/shared/ui/Container';
import { DisciplineList } from '@/widgets/discipline-list';

const MainPage = () => {
  return (
    <Container className="flex flex-col gap-8 pt-8 pb-8">
      <div className="flex flex-col gap-3">
        <h1 className="text-hero uppercase text-center">Молва</h1>
        <p className="text-h1 text-center">
          Твой навигатор в мире ИОТ
        </p>
      </div>
      <DisciplineList />
    </Container>
  );
};

export default MainPage;
