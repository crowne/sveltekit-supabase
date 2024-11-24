import { redirect } from "@sveltejs/kit";
import { logger } from '$lib/logger';

export const GET = async ({ locals: { supabase }, url }) => {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: "github",
    options: {
      redirectTo: url.origin + "/auth/callback",
    },
  });

  logger.debug('data : ', data);
  logger.debug('error : ', error);

  if (data.url) {
    redirect(307, data.url);
  }

  redirect(307, "/auth/error");
};
