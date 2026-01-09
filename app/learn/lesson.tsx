import ChallengeRenderer from "@/components/lesson/challenge-renderer";
import FeedbackOverlay from "@/components/lesson/feedback-overlay";
import LessonHUD from "@/components/lesson/lesson-hud";
import Loading from "@/components/loading";
import "@/global.css";
import { useLessonSession } from "@/hooks/lesson-session";
import { LessonRequest } from "@/types/lesson-session";
import { LessonSubject } from "@/types/lessons";
import { Region } from "@/types/regions";
import { router, useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";

export default function Lesson() {
  const { r, t } = useLocalSearchParams<{ 
    r: Region, 
    t: LessonSubject,
  }>();

  const exitLesson = () => {
    router.push({
      pathname: "/learn/region",
      params: { 
        r: r,
      }
    })
  }

  const {
    startLesson,
    currentChallenge,
    progress,
    phase,
    submitAnswer,
    next,
    feedback
  } = useLessonSession();

  useEffect(() => {
    const lessonRequest: LessonRequest = {
      region: r,
      subject: t,
    }

    startLesson(lessonRequest);
  }, [startLesson, r, t]);

  if (!currentChallenge) return <Loading />

  return (
    <ScrollView className="bg-background p-4">
      <View className="gap-4">
        <LessonHUD region={r} progress={progress} />

        <ChallengeRenderer
          challenge={currentChallenge}
          disabled={phase !== 'answering'}
          onSubmit={submitAnswer}
        />

        {phase === 'feedback' && (
          <FeedbackOverlay
            feedback={feedback}
            onContinue={() => next(exitLesson)}
          />
        )}
      </View>
    </ScrollView>
  );
}
