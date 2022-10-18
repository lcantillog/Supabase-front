// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  urlApi:"http://localhost:8080/",
  supabase: {
    url: 'https://gbphwjbubbyfgnqztdxz.supabase.co',
    key: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdicGh3amJ1YmJ5ZmducXp0ZHh6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjU3NjM5MzMsImV4cCI6MTk4MTMzOTkzM30.YEBdzeuJuqRkMhvVVC4NPasKF1h9NG9L5vg2gBpMy2Q',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
