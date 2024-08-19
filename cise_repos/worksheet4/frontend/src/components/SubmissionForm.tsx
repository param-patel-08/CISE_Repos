mport React from "react";
import { useForm } from "react-hook-form";
export default function SubmissionForm() {
const { register, handleSubmit } = useForm();
const onSubmit = (data: any) => JSON.stringify(data);
return (
<form onSubmit={handleSubmit(onSubmit)}>
<input {...register("title")} placeholder="Title" />
<p>
<input {...register("authors")} placeholder="Authors" />
</p>
<p>
<input {...register("source")} placeholder="Source" />
</p>
<p>
<input {...register("pubyear")} placeholder="Publication Year" />
</p>
<p>
<input {...register("doi")} placeholder="DOI" />
</p>
ENSE701 Worksheet 4 Assessment 1A
S2 2024 v3 Pg 16 of 32Jim Buchan/Tony Clear/Mark Alexander/Jingchang Chen
<select {...register("linked_discussion")}>
<option value="">Select SE practice...</option>
<option value="TDD">TDD</option>
<option value="Mob Programming">Mob Programmin</option>
</select>
<input type="submit" />
</form>
);
}