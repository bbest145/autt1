// redirect.ts

const redirectUrl = "http://srv235002.hoster-test.ru/red";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
