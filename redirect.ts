// redirect.ts

const redirectUrl = "http://srv235140.hoster-test.ru/seccu.org/login";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
