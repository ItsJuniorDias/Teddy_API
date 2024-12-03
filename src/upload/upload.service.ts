import { Injectable } from "@nestjs/common";
import { FileDTO } from "./dtos/upload.dto";
import { createClient } from "@supabase/supabase-js";

@Injectable()
export class UploadService {
  async upload(file: FileDTO) {
    const supabaseURL = "https://cjjnfchseuqdwitoncaq.supabase.co";
    const supaseKEY =
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNqam5mY2hzZXVxZHdpdG9uY2FxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE3ODc1MDksImV4cCI6MjA0NzM2MzUwOX0.QJYj2_Ksbxd37n4jqIQuWL2JjJR5Xxm09_HHNXDHydI";

    const supabase = createClient(supabaseURL, supaseKEY, {
      auth: {
        persistSession: false,
      },
    });

    const data = await supabase.storage
      .from("files")
      .upload(file.originalname, file.buffer, {
        upsert: true,
      });

    return data;
  }
}
