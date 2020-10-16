CREATE TABLE "todo" (
"id" serial PRIMARY KEY,
"task_name" VARCHAR(190) NOT NULL,
"task_type" VARCHAR(190) NOT NULL,
"task_due" DATE,
"task_status" boolean DEFAULT false
);

INSERT INTO "todo" ("task_name", "task_type", "task_due")
VALUES ('Dishes', 'Cleaning', '10/30/2020'), ('Clean the litter box', 'Cleaning', '10/10/2020'), ('Call Mom', 'Family', '10/01/2020');

