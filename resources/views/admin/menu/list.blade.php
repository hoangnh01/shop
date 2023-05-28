@extends('admin.main')

@section('content')
    <table class="table" xmlns="http://www.w3.org/1999/html">
        <thead>
            <tr>
                <th style="width: 50px">ID</th>
                <th>Name</th>
                <th>Active</th>
                <th>Update</th>
                <th style="width: 100px">&nbsp;</th>
            </tr>
        </thead>
        <tbody>
            {!! \App\Helpers\Helper::menu($menus) !!}
{{--            {!!  !!}: biên dịch html            --}}
        </tbody>
    </table>
@endsection

