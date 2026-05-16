/*
  # Create bookings table for beauty salon

  1. New Tables
    - `bookings`
      - `id` (uuid, primary key)
      - `name` (text, customer name)
      - `email` (text, customer email)
      - `phone` (text, customer phone)
      - `service` (text, selected service)
      - `date` (date, appointment date)
      - `time` (text, appointment time)
      - `message` (text, optional notes)
      - `created_at` (timestamp)

  2. Security
    - Enable RLS on `bookings` table
    - Add policy for anonymous users to insert bookings (public booking form)
*/

CREATE TABLE IF NOT EXISTS bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL DEFAULT '',
  service text NOT NULL,
  date date NOT NULL,
  time text NOT NULL,
  message text DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE bookings ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create a booking"
  ON bookings FOR INSERT
  TO anon
  WITH CHECK (true);
