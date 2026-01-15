import ChallengeRenderer from "@/components/lesson/challenge-renderer";
import FeedbackOverlay from "@/components/lesson/feedback-overlay";
import LessonComplete from "@/components/lesson/lesson-complete";
import LessonHUD from "@/components/lesson/lesson-hud";
import Loading from "@/components/loading";
import { LessonSubject } from "@/domain/lesson";
import { LessonRequest } from "@/domain/lesson-session";
import { Region } from "@/domain/region";
import "@/global.css";
import { useLessonSession } from "@/hooks/lesson-session";
import { useLocalSearchParams } from "expo-router";
import { useEffect } from "react";
import { ScrollView, View } from "react-native";

export default function Lesson() {
  const { r, t } = useLocalSearchParams<{ 
    r: Region, 
    t: LessonSubject,
  }>();

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
      questionCount: 5,
    }

    startLesson(lessonRequest);
  }, [startLesson, r, t]);

  if (phase === 'loading') return <Loading />

  return (
    <ScrollView className="bg-background p-4">
      <View className="gap-4">
        <LessonHUD region={r} progress={progress} />

        {(phase === 'answering' || phase === 'feedback') && (
          <ChallengeRenderer
            challenge={currentChallenge}
            disabled={phase !== 'answering'}
            onSubmit={submitAnswer}
          />
        )}

        {phase === 'feedback' && (
          <FeedbackOverlay
            feedback={feedback}
            onContinue={next}
          />
        )}

        {phase === 'completed' && (
          <LessonComplete region={r} progress={progress!} />
        )}
      </View>
    </ScrollView>
  );
}
