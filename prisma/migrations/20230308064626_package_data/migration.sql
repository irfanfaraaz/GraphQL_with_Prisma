-- CreateTable
CREATE TABLE "Package" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "contact" TEXT,
    "description" TEXT,
    "location" TEXT NOT NULL,
    "cost" DOUBLE PRECISION NOT NULL,
    "duration" TEXT,
    "image" TEXT NOT NULL,
    "activities" TEXT[],
    "details_file" TEXT,
    "updated_at" TIMESTAMP(3),
    "video_link" TEXT,
    "is_premium_flag" BOOLEAN,

    CONSTRAINT "Package_pkey" PRIMARY KEY ("id")
);
