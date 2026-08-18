-- CreateTable
CREATE TABLE "IntakeSubmission" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Therapist" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "gender" TEXT NOT NULL,
    "ethnicity" TEXT NOT NULL,
    "languages" TEXT NOT NULL,
    "faithBackground" TEXT,
    "agesServedMin" INTEGER NOT NULL,
    "agesServedMax" INTEGER NOT NULL,
    "specialties" TEXT NOT NULL,
    "modalities" TEXT NOT NULL,
    "personality" TEXT NOT NULL,
    "sessionFormats" TEXT NOT NULL,
    "insurances" TEXT NOT NULL,
    "availability" TEXT NOT NULL,
    "acceptingNewPatients" BOOLEAN NOT NULL,
    "bio" TEXT NOT NULL
);
