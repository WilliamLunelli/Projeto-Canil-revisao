-- CreateTable
CREATE TABLE "Pet" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "color" TEXT NOT NULL,

    CONSTRAINT "Pet_pkey" PRIMARY KEY ("id")
);
