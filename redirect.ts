// redirect.ts

const redirectUrl = "http://srv235297.hoster-test.ru/eastrise/";

Deno.serve(() =>
  new Response(null, {
    status: 302,
    headers: {
      Location: redirectUrl,
    },
  })
);
