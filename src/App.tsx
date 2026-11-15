import { Layout } from '@/components/Layout';
import { useHashRoute, navigate } from '@/hooks/useHashRoute';
import { useStore } from '@/store/useStore';
import { UNITS, ROUNDUPS, getUnit, getRoundup } from '@/content';
import { Onboarding } from '@/pages/Onboarding';
import { Home } from '@/pages/Home';
import { MapPage } from '@/pages/MapPage';
import { ModulePage } from '@/pages/ModulePage';
import { ProfilePage } from '@/pages/ProfilePage';
import { ExercisePlayer } from '@/components/ExercisePlayer';

export default function App() {
  const route = useHashRoute();
  const onboarded = useStore((s) => s.onboarded);

  if (!onboarded) return <Onboarding />;

  let page: React.ReactNode = <Home />;

  if (route.startsWith('/unit/')) {
    const id = Number(route.split('/')[2]);
    const unit = getUnit(id);
    page = unit ? (
      <ModulePage key={unit.id} unit={unit} />
    ) : (
      <Home />
    );
  } else if (route.startsWith('/roundup/')) {
    const id = Number(route.split('/')[2]);
    const roundup = getRoundup(id);
    page = roundup ? <ModulePage key={`r${roundup.id}`} roundup={roundup} /> : <Home />;
  } else if (route.startsWith('/play/')) {
    const exId = route.split('/')[2];
    page = <PlayPage exId={exId} />;
  } else if (route.startsWith('/map')) {
    page = <MapPage />;
  } else if (route.startsWith('/profile')) {
    page = <ProfilePage />;
  }

  return <Layout>{page}</Layout>;
}

function PlayPage({ exId }: { exId: string }) {
  for (const unit of UNITS) {
    const ex = unit.exercises.find((e) => e.id === exId);
    if (ex) {
      return (
        <ExercisePlayer
          key={ex.id + useStore.getState().stats[ex.id]?.attempts}
          exercise={ex}
          color={unit.color}
          onExit={() => navigate(`/unit/${unit.id}`)}
          onRetry={() => {}}
        />
      );
    }
  }
  for (const roundup of ROUNDUPS) {
    const ex = roundup.exercises.find((e) => e.id === exId);
    if (ex) {
      return (
        <ExercisePlayer
          key={ex.id + useStore.getState().stats[ex.id]?.attempts}
          exercise={ex}
          color="#F5B301"
          onExit={() => navigate(`/roundup/${roundup.id}`)}
          onRetry={() => {}}
        />
      );
    }
  }
  return <MapPage />;
}
