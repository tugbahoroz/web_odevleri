<%
' Örnek isim listesi
Dim names
names = Array("Ali", "Ayşe", "Ahmet", "Aylin", "Mehmet", "Merve", "Mustafa", "Melisa")

Dim q
q = Request.QueryString("q") ' Kullanıcının girdiği değer

Dim hint
hint = ""

If q <> "" Then
    Dim i
    For i = 0 To UBound(names)
        ' Başlangıç kontrolü (case-insensitive)
        If LCase(Left(names(i), Len(q))) = LCase(q) Then
            If hint = "" Then
                hint = names(i)
            Else
                hint = hint & ", " & names(i)
            End If
        End If
    Next
End If

If hint = "" Then
    Response.Write "Hiçbir öneri yok"
Else
    Response.Write hint
End If
%>
